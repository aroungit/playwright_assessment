"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        //throw new Error("Method not implemented.");
        return "the render is being perfomed";
    };
    Button.prototype.handleEvent = function () {
        //throw new Error("Method not implemented.");
        return "the event handling is being performed";
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        //throw new Error("Method not implemented.");
        return "the text field rendering is being perfomed";
    };
    TextField.prototype.handleEvent = function () {
        // throw new Error("Method not implemented.");
        return "the text field event handling is being perfomed";
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        //throw new Error("Method not implemented.");
        return "the Checkbox rendering is being perfomed";
    };
    Checkbox.prototype.handleEvent = function () {
        //throw new Error("Method not implemented.");
        return "the checkbox event handling is being perfomed";
    };
    return Checkbox;
}());
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.sharePost = function () {
        //throw new Error("Method not implemented.");
        return "the post is being captured";
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.sharePost = function () {
        //throw new Error("Method not implemented.");
        return "the comment is being captured";
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.sharePost = function () {
        //throw new Error("Method not implemented.");
        return "the like is being updated";
    };
    return Like;
}());
var bButton = new Button();
console.log(bButton.render());
console.log(bButton.handleEvent());
var tTextField = new TextField();
console.log(tTextField.render());
console.log(tTextField.handleEvent());
var cCheckBox = new Checkbox();
console.log(cCheckBox.render());
console.log(cCheckBox.handleEvent());
var pPost = new Post();
console.log(pPost.sharePost());
var cComment = new Comment();
console.log(cComment.sharePost());
var lLike = new Like();
console.log(lLike.sharePost());
