var Dn3 = (function() {
		// layer popup
		var callLayer = function() {
			var btnLayer = document.querySelectorAll('[data-layer]');
			for (var i = 0; i < btnLayer.length; i++) {
				btnLayer[i].addEventListener('click', function(e) {
					var targetId = this.dataset.layer;
					var targetLayer = document.querySelector('#' + targetId);
					targetLayer.classList.add('showing');
					console.log($(targetLayer));
					if (targetLayer.classList.contains('full-type') || targetLayer.classList.contains('post-type')) {
						document.querySelector('html, body').classList.add('scroll-off');
					}
				});
			}
			var btnLayerClose = document.querySelectorAll('.layer-section .js-layer-close');
			for (var i = 0; i < btnLayerClose.length; i++) {
				btnLayerClose[i].addEventListener('click', function(e) {
					var targetElem = e.target;
					while (!targetElem.classList.contains('layer-section')) {
						targetElem = targetElem.parentNode;
						if (targetElem.nodeName == 'BODY') {
							targetElem = null;
							return;
						}
					}
					targetElem.classList.remove('showing');
					document.querySelector('html, body').classList.remove('scroll-off');
				})
			}
		};
		// tab
		var tabActive = function() {
			var tabList = document.querySelectorAll('.tab-list-wrap .tab-list');
			Array.prototype.forEach.call(tabList, function(list) {
				list.children[0].addEventListener('click', function(e) {
					e.preventDefault()
					var tabContent = document.querySelectorAll('.tab-container .tab-content')
					var tabNum = this.parentElement.getAttribute('data-tabnum')
					Array.prototype.forEach.call(tabContent, function(cont, i) {
						cont.style.display = 'none'
						tabList[i].className = 'tab-list'
					})
					tabContent[tabNum].style.display = 'block'
					if(list.className.indexOf('tab-active') == -1) {
						list.className = 'tab-list tab-active'
					}
				})
			})
		};
		// accordion
		var accordionActive = function() {
			var acc = document.getElementsByClassName("btn-accordion");
			var i;

			for (i = 0; i < acc.length; i++) {
				acc[i].addEventListener("click", function() {
					this.classList.toggle("active");

					var panel = this.parentElement.nextElementSibling;
					if (panel.style.display === "block") {
						panel.style.display = "none";
					} else {
						panel.style.display = "block";
					}
				});
			}
		}

		return {
			callLayer: callLayer,
			tabActive: tabActive,
			accordionActive: accordionActive,
		}
	}
)();