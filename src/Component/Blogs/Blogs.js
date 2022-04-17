import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h3>(1) Que: Difference between Authorization and Authentication.</h3>
            <h4 className='ms-5'>Ans: Authorization means giving access to do something on the website. In some certain things in website, user have to take permission to proceed. And by Authorization, user gets the permission and can do those works that needs Authorization. Authentication is the way to be authorized. By this, user confirms his identity. It means give some secret info as key and confirm yourself.  </h4>
            <h3>(2) Que:  Why are you using firebase? What other options do you have to implement authentication?</h3>
            <h4 className='ms-5'>Ans: Firebase is easier way to implement authentication for website without making own authentication system. Using this is a lot more easier then making own authentication system. There are many options to implement authentication like facebook, google, twitter and with many more existing account. Besides, you can implement authentication by making new user with email-password or phone number. </h4>
            <h3>(3) Que: What other services does firebase provide other than authentication?</h3>
            <h4 className='ms-5'>Ans: Services provided by firebase other than authentication are Hosting, Cloud Storage, Google Analytics, Cloud Messaging, backend services, easy-to-use SDKs and many more. </h4>
        </div>
    );
};

export default Blogs;