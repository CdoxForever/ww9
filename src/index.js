import {PATH, location} from './shared/locations' 
import {links} from './shared/links'
// import {getItems} from './api/api-handlers'
import {test} from './components/page1/page1'
import './style.scss';
// import { test } from './components/page1/page1';

window.onload = () => {
    const pathURL = window.location.pathname
    switch (pathURL) {
        case location.main:
            links()
            break;
        case location.page1:
            links()
            // getItems()
            test()
            break;
        case location.page2:
            links()
            break;
        case location.page3:
            links()
            break;
        case location.page4:
            links()
            break;
        default:
            window.location.href = PATH.main
            break;
        
    }
}