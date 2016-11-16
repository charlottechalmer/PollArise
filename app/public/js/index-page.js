/* Copyright IBM Corp. 2015
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*global $:false */

'use strict';

$('.celeb-img img').on('load', function() {
	$(this).parent().removeClass('shrinked');
	$(this).parent().addClass('expanded');
}).each(function() {
	if (this.complete) {
		$(this).load();
	}
});

$('.politicians').on('load', function() {
  // $(this).addClass('revealed');
  $(this).addClass('revealed');
}).each(function() {
  if (this.complete) {
    $(this).load();
  }
});

$('form').submit(function() {
	$('.loading').addClass('show');
});

$(document).ready(function() {
	setTimeout(function() {
		$('.bottom').addClass('slideInUp').removeClass('hide');
	}, 500);
	setTimeout(function() {
		$('.bottom').addClass('fadeOutDown').removeClass('slideInUp');
	}, 2000);
	setTimeout(function() {
		$('#hillz').addClass('slideInLeft').removeClass('hide');
	}, 2500);
	setTimeout(function() {
		$('#palin').addClass('slideInRight').removeClass('hide');
	}, 2500);
	setTimeout(function() {
		$('#biden').addClass('slideInLeft').removeClass('hide');
	}, 3000);
	setTimeout(function() {
		$('#pence').addClass('slideInRight').removeClass('hide');
	}, 3000);
	setTimeout(function() {
		$('#bernie').addClass('slideInUp').removeClass('hide');
	}, 3000);
	setTimeout(function() {
		$('#bill').addClass('slideInUp').removeClass('hide');
	}, 3000);
	setTimeout(function() {
		$('#bernie').addClass('fadeOutDown').removeClass('slideInUp');
	}, 4500);
	setTimeout(function() {
		$('#bill').addClass('fadeOutDown').removeClass('slideInUp');
	}, 4500);
	setTimeout(function() {
		$('#hillz').addClass('fadeOutLeft').removeClass('slideInLeft');
	}, 4500);
	setTimeout(function() {
		$('#palin').addClass('fadeOutRight').removeClass('slideInRight');
	}, 4500);
	setTimeout(function() {
		$('#biden').addClass('fadeOutLeft').removeClass('slideInLeft');
	}, 4500);
	setTimeout(function() {
		$('#pence').addClass('fadeOutRight').removeClass('slideInRight');
	}, 4500);
});
	
