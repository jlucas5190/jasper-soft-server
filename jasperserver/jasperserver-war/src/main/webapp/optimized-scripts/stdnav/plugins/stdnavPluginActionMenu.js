define(["require","exports","module","jquery","underscore","logger","stdnav","actionModel.modelGenerator","core.events.bis","core.layout","actionModel.primaryNavigation"],function(t,e,n){"use strict";var s=t("jquery"),o=t("underscore"),i=t("logger").register(n),l=t("stdnav"),u=t("actionModel.modelGenerator"),r=t("core.events.bis"),c=t("core.layout"),a=t("actionModel.primaryNavigation"),T=0,_=function(){T++,this.serial=T,this.menu_item_callbacks={click:{}}};o.extend(_.prototype,{zinit:function(t){return this},activate:function(){this.behavior={down:[this,this._onDown,null],enter:null,exit:null,fixfocus:[this,this._fixFocus,null],fixsubfocus:[this,this._fixFocus,null],fixsuperfocus:[this,this._fixSuperfocus,null],focusin:[this,this._onFocusIn,null],focusout:[this,this._onFocusOut,null],left:[this,this._onLeft,null],right:[this,this._onRight,null],superfocusout:[this,this._onSuperfocusOut,null],up:[this,this._onUp,null],inherit:!1,inheritable:!0},l.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){l.unregisterNavtype(this.navtype,this)},_fixFocus:function(t){var e,n=s(t);if(n.is("div,ul,ol")){var o=n.find(".pressed");o.length>0?e=o[0]:(o=n.find("li"),e=o.length>0?o[0]:t)}else if(n.is("li"))e=t;else{var i=n.closest("li");i.length>0?e=s(i[0]).prop["js-navigable"]===!1?n.closest("ul,ol"):i[0]:(e=n.closest("ul,ol"),e=n.find("li"),e.length>0&&(e=e[0]))}return e},_fixSuperfocus:function(t){var e,n=s(t).closest(".menuRoot,.dropDown");return e=n.length>0?n[0]:null},_onFocusIn:function(t){var e,n=(s(t),s(t));if(n.length>0){var o=n.closest(c.NAVIGATION_PATTERN);if(o.length>0)r.over(o.find(c.BUTTON_PATTERN)[0]),e=o.closest(c.NAVIGATION_MUTTON_PATTERN),e.length>0?a.showNavButtonMenu(null,e[0]):u.hideMenu();else{var o=n.closest(c.MENU_LIST_PATTERN);o.length>0&&(r.over(o.find(c.BUTTON_PATTERN)[0]),e=o.closest(c.NAVIGATION_MUTTON_PATTERN))}}return t},_onFocusOut:function(t){var e=s(t).closest(c.NAVIGATION_PATTERN);if(e.length>0)this.lastMenuBarItem!==t&&r.out(e.find(c.BUTTON_PATTERN)[0]);else{var e=s(t).closest(c.MENU_LIST_PATTERN);e.length>0&&r.out(e.find(c.BUTTON_PATTERN)[0])}return null},_onSuperfocusOut:function(t){var e=(s(t),s("#"+c.MAIN_NAVIGATION_ID));if(e.length<1)return t;var n=s(document.activeElement);if(n.closest(".dropDown").length<1){var o=e.find("."+c.HOVERED_CLASS);o.length>0&&r.out(o[0])}},_focus_prev_menu_entry:function(t){var e,n=!1;if(t.hasClass("node")&&!t.children(".menu").hasClass("is-closed")&&(n=!0),e=t.prev(),0===e.length)for(e=t;e.next().length>0;)e=e.next();i.debug("Granting focus to "+e.attr("id")),l.setSubfocus(e)},_focus_next_menu_entry:function(t){var e,n=!1;if(t.hasClass("node")&&!t.children(".menu").hasClass("is-closed")&&(n=!0),e=t.next(),0===e.length)for(e=t;e.prev().length>0;)e=e.prev();i.debug("Granting focus to "+e.attr("id")),l.setSubfocus(e)},_onSubfocusIn:function(t){if("li"===s(t).prop("nodeName")==!1){var e=this._fixSubfocus(t);l.setSubfocus(e,!1)}},_onExit:function(t){s(t).closest(".menuRoot").focus()},_onLeft:function(t){var e=s(t).closest(c.NAVIGATION_PATTERN),n=s(t);return e.length>0?n=e.prev(c.NAVIGATION_PATTERN):(e=s(t).closest(c.MENU_LIST_PATTERN),e.length>0&&(n=s(this.lastMenuBarItem).prev(c.NAVIGATION_PATTERN),this.lastMenuBarItem=null)),n.length>0?n[0]:t},_onRight:function(t){var e=s(t).closest(c.NAVIGATION_PATTERN),n=s(t);return e.length>0?n=e.next(c.NAVIGATION_PATTERN):(e=s(t).closest(c.MENU_LIST_PATTERN),e.length>0&&(n=s(this.lastMenuBarItem).next(c.NAVIGATION_PATTERN),this.lastMenuBarItem=null)),n.length>0?n[0]:t},_onUp:function(t){var e=s(t),n=s(document.activeElement).closest("."+u.DROP_DOWN_MENU_CLASS);if(!(n.length>0))return t;var o=s(document.activeElement).closest(c.MENU_LIST_PATTERN);for(e=o.prev(c.MENU_LIST_PATTERN);e.is(c.SEPARATOR_PATTERN);)e=e.prev(c.MENU_LIST_PATTERN);return e.length<1&&(e=s(this.lastMenuBarItem),this.lastMenuBarItem=null),e.length>0?e[0]:t},_onDown:function(t){var e=s(t),n=s(document.activeElement).closest("."+u.DROP_DOWN_MENU_CLASS);if(n.length>0){var o=s(document.activeElement).closest(c.MENU_LIST_PATTERN);for(e=o.next(c.MENU_LIST_PATTERN);e.is(c.SEPARATOR_PATTERN);)e=e.next(c.MENU_LIST_PATTERN)}else{if(n=s(document.activeElement).closest("."+c.MENU_ROOT_CLASS),n.length<1)return t;u.isMenuShowing()&&(this.lastMenuBarItem=t,e=s(c.MENU_LIST_PATTERN))}return e.length>0?e[0]:t}}),s.extend(_.prototype,{navtype:"actionmenu",navtype_tags:[]});var h=new _;return h});