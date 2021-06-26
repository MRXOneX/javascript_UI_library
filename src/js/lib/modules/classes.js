import $ from '../core';

$.prototype.addClass = function(...className) {
	if(!className) {
		return this;
	}
	for(let i = 0; i < this.length; i++) {
		this[i].classList.add(...className); // className - название класса
	}

	return this;
};
$.prototype.removeClass = function (...className) {
	if(!className) {
		return this;
	}
	for(let i = 0; i < this.length; i++) {
		this[i].classList.remove(...className); // className - название класса
	}
	return this;
};
$.prototype.toggleClass = function (className) {
	if(!className) {
		return this;
	}
	for(let i = 0; i < this.length; i++) {
		this[i].classList.toggle(className); // className - название класса
	}
	return this;
};
$.prototype.addAttribute = function(attributeName, attributeValue) {
	if(!attributeName || !attributeValue) {
		return this;
	}
	for(let i = 0; i < this.length; i++) {
		this[i].setAttribute(attributeName, attributeValue); // 'attributeName' - название аттрибута | attributeValue - значение аттрибута
	}
	return this;
}
$.prototype.removeAttribute = function(attributeName) {
	if(!attributeName) {
		return this;
	}
	for(let i = 0; i < this.length; i++) {
		this[i].removeAttribute(attributeName); // attributeName - название аттрибута
	}
};