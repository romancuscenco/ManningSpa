/*
 * spa.shell.js
 * Shell module for SPA
 */

spa.shell = (function () {
    //----------------------BEGIN MODULE SCOPE VARIABLES----------------------------------------
    var
        configMap = {
            main_html: String()
                + '<div class="spa-shell-head">'
                +   '<div class="spa-shell-head-logo"></div>'
                +   '<div class="spa-shell-head-acct"></div>'
                + '<div class="spa-shell-head-search"></div>'
                + '</div>'
                + '<div class="spa-shell-main">'
                +   '<div class="spa-shell-main-nav"></div>'
                +   '<div class="spa-shell-main-content"></div>'
                + '</div>'
                + '<div class="spa-shell-foot"></div>'
                + '<div class="spa-shell-chat"></div>'
                + '<div class="spa-shell-modal"></div>',

            chat_extend_time: 1000,
            chat_retract_time: 300,
            chat_extend_height: 450,
            chat_retract_height: 15
        },
        stateMap = { $container: null },
        jqueryMap = {},

        setJqueryMap, toggleChat, initModule;
    //----------------------END MODULE SCOPE VARIABLES----------------------------------------


    //----------------------BEGIN UTILITY METHODS----------------------------------------
    //----------------------END UTILITY METHODS----------------------------------------


    //----------------------BEGIN DOM METHODS----------------------------------------
    // Begin DOM method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;

        jqueryMap = {
            $container: $container,
            $chat: $container.find('.spa-shell-chat')
        };
    };
    // End DOM method /setJqueryMap/

    // Begin DOM method /toggleChat/
    //Purpose: Extends or retracts chat slider
    //Arguments:
    //
    // End DOM method /toggleChat/
    //----------------------END DOM METHODS----------------------------------------


    //----------------------BEGIN EVENT HANDLERS----------------------------------------
    //----------------------END EVENT HANDLERS----------------------------------------


    //----------------------BEGIN PUBLIC METHODS----------------------------------------
    // Begin Public method /initModule/
    initModule = function ($container) {
        stateMap.$container = $container;

        $container.html(configMap.main_html);

        setJqueryMap();
    };
    // End Public method /initModule/

    return { initModule: initModule };
    //----------------------END PUBLIC METHODS----------------------------------------

}());