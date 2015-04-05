/**
  Apply our spoilers when the app boots
**/
import { decorateCooked } from 'discourse/lib/plugin-api';

export default {
  name: "apply-spoilers",
  initialize: function(container) {
    decorateCooked(container, function($elem) {
      // text
      //not(:has(img))
      $('.spoiler', $elem).removeClass('spoiler')
                                         .addClass('spoiled')
                                         .spoilContent();
      // images
      //$('.spoiler:has(img)', $elem).removeClass('spoiler')
      //                             .addClass('spoiled')
      //                             .wrap("<div style='display: inline-block; overflow: hidden;'></div>")
      //                             .spoilImage();
    });
  }
};
