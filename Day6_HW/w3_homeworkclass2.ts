import { UIComponent , SocialMediaFeature } from "./w3_homework2";
class Button implements UIComponent{
    render(): string {
        //throw new Error("Method not implemented.");
         return "the render is being perfomed";
        
    }
    handleEvent() : string {
        //throw new Error("Method not implemented.");
        return`the event handling is being performed`;
        
    }


}

class TextField implements UIComponent{
    render(): string {
        //throw new Error("Method not implemented.");
        return `the text field rendering is being perfomed`;
        
    }
    handleEvent(): string {
       // throw new Error("Method not implemented.");
       return `the text field event handling is being perfomed`;
     
    }
    
}

class Checkbox implements UIComponent{
    render(): string {
        //throw new Error("Method not implemented.");
        return `the Checkbox rendering is being perfomed`;
        
    }
    handleEvent(): string {
        //throw new Error("Method not implemented.");

       return `the checkbox event handling is being perfomed`;
    }

    
}

class Post implements SocialMediaFeature{
    sharePost(): string {
        //throw new Error("Method not implemented.");
        return `the post is being captured`
    }


}

class Comment implements SocialMediaFeature{
    sharePost(): string {
        //throw new Error("Method not implemented.");

        return `the comment is being captured`
    }


}
class Like implements SocialMediaFeature{
    sharePost(): string {
        //throw new Error("Method not implemented.");
        return `the like is being updated`
    }


}

const bButton = new Button();
console.log(bButton.render());
console.log(bButton.handleEvent());
const tTextField = new TextField();
console.log(tTextField.render());
console.log(tTextField.handleEvent());
const cCheckBox = new Checkbox();
console.log(cCheckBox.render());
console.log(cCheckBox.handleEvent());

const pPost = new Post();
console.log(pPost.sharePost());

const cComment = new Comment();
console.log(cComment.sharePost());

const lLike = new Like();
console.log(lLike.sharePost());

