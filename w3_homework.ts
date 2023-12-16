/**
 * TypeScript Assignments

### Assignment 1: Automated Testing of a User Authentication System 
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator` 
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
   and password reset.
3. Create instance of the class and call the methods
 
 
### Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
 
 
### Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
   and share posts in a social media platform application.
 * 
 * 
 * 
 * 
 * 
 */

class UserAuthenticator {

   login(username: string, password: string, captcha?: any) {

      console.log(`the captcha is ${captcha}`);
      return (username + "  " + password);
   }
   logout() {

      console.log('this is logout module')

   }
   passwordReset() {

      console.log('this is password Reset module')

   }

}

const userAuth = new UserAuthenticator();
const login = userAuth.login("Aroun", "p*******d", "$#81*&");
console.log(`the login details are  ${login}`)
userAuth.logout();
userAuth.passwordReset();

