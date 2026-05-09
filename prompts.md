PROMPT 1:
You have the final backend code for the Application management system. Basically, just a system for the HR's and applicants. Applicants should add applications, and HR's with admin access can see candidates information, applications, also they can add notes to specific applications, change the status of them as listed in code. For more informetion, there's @README.md file. 
Your Task: create a frontent ONLY FOR apply page using React, even though you have all the code and system is more than just apply page, you have to ignore other functionalities and focus only on apply page. Frontend should be suitable, professional, correct and good-looking.
IMPORTANT! DO NOT change the backend structure. The only thing you can change is the Handlebars files and mentions, because at first Handlebars was implemented for the frontend, you will use React. Application should work correctly.

PROMPT 2:
i want to access that page from root (https://localhost:5000), when i try to access it i have a message about exceeded redirections. (this prompt did slight changes to backend just to access it from localhost:5000/ , what was changed:
FROM:
// Home page
app.get("/", (req, res) => {
    if (res.locals.user) { // User logged in -> dashboard
        res.redirect("/dashboard");
    } else { // User is not logged in -> login page
        res.redirect("/auth/login");
    }
});
TO:
// Home page
app.get("/", (req, res) => {
    // Public entrypoint for applicants
    res.redirect("/apply");
});
)