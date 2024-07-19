import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChannelService from 'utils/channelTalk/ChannelService';
ChannelService.loadScript();
const CHANNEL_SERVICE_KEY = process.env.REACT_APP_CHANNEL_SERVICE_KEY || '';
ChannelService.boot({
    pluginKey: CHANNEL_SERVICE_KEY,
});
ChannelService.showChannelButton();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(<App />);
