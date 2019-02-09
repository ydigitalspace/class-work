// Core
import merge from 'webpack-merge';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Config
import getCommonConfig from './webpack.common';

// Instruments
import { SOURCE, HOST, PORT } from '../constants';
import {
    loadDevCss,
    connectFriendlyErrors,
    connectHotModuleReplacement,
} from '../modules';

export default async () => {
    const suggestedPort = await choosePort(HOST, PORT);

    return merge(
        getCommonConfig(),
        {
            mode:    'development',
            devtool: 'eval-source-map',
            entry:   [
                SOURCE,
                'webpack-hot-middleware/client?reload=true&quiet=true',
            ],
            devServer: {
                host: HOST,
                port: suggestedPort,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"                    
                  }                
            },
        },
        loadDevCss(),
        connectFriendlyErrors(),
        connectHotModuleReplacement(),
    );
};
