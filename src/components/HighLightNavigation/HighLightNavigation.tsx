import React, {
    useState,
    useEffect,
    useRef,
    ReactElement,
    useLayoutEffect,
} from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TitleText } from 'components/_common/Typography/TitleText';
import { BodyText } from 'components/_common/Typography/BodyText';

interface Props {
    children?: ReactElement;
    itemList: any[];
}

export const HighLightNavigation = (props: Props) => {
    const { t, i18n } = useTranslation();
    const { itemList } = props;
    const [selectedChild, setSelectedChild] = useState<number>(0);
    const [highlightPosition, setHighlightPosition] = useState<{
        left: number;
        width: number;
    }>({ left: 0, width: 0 });
    const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);
    const selectedChildRef = useRef<number>(selectedChild);

    const updateHighlightPosition = () => {
        const selectedElement = childrenRefs.current[selectedChildRef.current];
        if (selectedElement) {
            const { offsetLeft, offsetWidth } = selectedElement;
            setHighlightPosition({ left: offsetLeft, width: offsetWidth });
        }
    };

    useLayoutEffect(() => {
        selectedChildRef.current = selectedChild;
        updateHighlightPosition();
    }, [selectedChild, i18n.language]);

    useEffect(() => {
        window.addEventListener('resize', updateHighlightPosition);
        i18n.on('languageChanged', updateHighlightPosition);
        return () => {
            window.removeEventListener('resize', updateHighlightPosition);
            i18n.off('languageChanged', updateHighlightPosition);
        };
    }, [i18n]);

    return (
        <NavigationWrap>
            <HighLightItem
                style={{
                    left: highlightPosition.left,
                    width: highlightPosition.width,
                }}
            />
            {itemList.map((menu, index) => (
                <NavigationItem
                    key={index}
                    ref={(el) => (childrenRefs.current[index] = el)}
                    onClick={() => setSelectedChild(index)}
                >
                    {selectedChild === index ? (
                        <>
                            <TitleText $size="S" $colorName="textSub">
                                {t(menu.title)}
                            </TitleText>
                            {menu.count && (
                                <TitleText $size="S" $colorName="primary6">
                                    {menu.count}
                                </TitleText>
                            )}
                        </>
                    ) : (
                        <>
                            <BodyText $size="S" $colorName="textInfo">
                                {t(menu.title)}
                            </BodyText>
                            {menu.count && (
                                <BodyText $size="S" $colorName="primary6">
                                    {menu.count}
                                </BodyText>
                            )}
                        </>
                    )}
                </NavigationItem>
            ))}
        </NavigationWrap>
    );
};

const NavigationWrap = styled.div`
    display: flex;
    position: relative;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: 0.8rem;
    gap: 0.4rem;
    padding: 0.4rem;
`;

const NavigationItem = styled.div`
    width: max-content;
    min-width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    flex: 1;
    border-radius: 0.8rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.6rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    color: #808080;
`;

const HighLightItem = styled.div`
    flex: 1;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.common};
    position: absolute;
    height: 3.2rem;
    transition: left 0.3s, width 0.3s;
    z-index: 0;
`;
