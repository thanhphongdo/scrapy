"use strict";
import { ConfigInterface } from './config_interface';
import { Config } from './config';
import * as debugConfig from './config.debug';
import * as devConfig from './config.dev';
import * as prodConfig from './config.prod';

function applyChangeConfig(currentConfig: ConfigInterface) {
    for (var key in currentConfig) {
        Config[key] = currentConfig[key];
    }
}

if(Config.parseServer != undefined){
    if (process && process.env) {
        switch (process.env.ENV) {
            case 'debug':
                applyChangeConfig(debugConfig.Config);
                break;
            case 'dev':
                applyChangeConfig(devConfig.Config);
                break;
            case 'prod':
                applyChangeConfig(prodConfig.Config);
                break;
            default:
                break;
        }
    }
}

export const appConfig = Config;

export * from './config_interface';