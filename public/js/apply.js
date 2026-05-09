(function () {
    const e = React.createElement;

    const positions = Array.isArray(window.APPLY_POSITIONS) && window.APPLY_POSITIONS.length
        ? window.APPLY_POSITIONS
        : ["Cashier", "Tester", "Admin"];

    function Field(props) {
        return e(
            "label",
            { className: "field" },
            e("span", { className: "field-label" }, props.label),
            e("input", {
                className: "field-input",
                type: props.type || "text",
                name: props.name,
                min: props.min,
                max: props.max,
                step: props.step,
                required: props.required !== false,
                placeholder: props.placeholder || ""
            })
        );
    }

    function ApplicationPage() {
        return e(
            "div",
            { className: "page-wrap" },
            e(
                "section",
                { className: "hero-card" },
                e("p", { className: "hero-eyebrow" }, "Talent Application Portal"),
                e("h1", { className: "hero-title" }, "Apply for your next opportunity"),
                e(
                    "p",
                    { className: "hero-subtitle" },
                    "Complete the form below. Our HR team reviews each submission and contacts shortlisted candidates."
                )
            ),
            e(
                "form",
                {
                    className: "application-form",
                    method: "POST",
                    action: "/api/apply/candidate"
                },
                e(
                    "div",
                    { className: "form-section" },
                    e("h2", { className: "section-title" }, "Personal Information"),
                    e(
                        "div",
                        { className: "grid-two" },
                        e(Field, { label: "First Name", name: "first-name", placeholder: "John" }),
                        e(Field, { label: "Last Name", name: "last-name", placeholder: "Doe" }),
                        e(Field, {
                            label: "Email Address",
                            name: "email-address",
                            type: "email",
                            placeholder: "john@example.com"
                        }),
                        e(Field, {
                            label: "Phone Number",
                            name: "phone-number",
                            type: "tel",
                            placeholder: "+1 234 567 890"
                        }),
                        e(Field, { label: "Country", name: "country", placeholder: "United States" }),
                        e(Field, { label: "Age", name: "age", type: "number", min: "18", max: "90" })
                    )
                ),
                e(
                    "div",
                    { className: "form-section" },
                    e("h2", { className: "section-title" }, "Application Details"),
                    e(
                        "div",
                        { className: "grid-two" },
                        e(
                            "label",
                            { className: "field" },
                            e("span", { className: "field-label" }, "Position"),
                            e(
                                "select",
                                { className: "field-input", name: "position", required: true, defaultValue: "" },
                                e("option", { value: "", disabled: true }, "Select position"),
                                positions.map(function (position) {
                                    return e("option", { key: position, value: position }, position);
                                })
                            )
                        ),
                        e(Field, { label: "Preferred Start Date", name: "start-date", type: "date" }),
                        e(Field, {
                            label: "Minimum Expected Pay",
                            name: "min-pay",
                            type: "number",
                            min: "0",
                            step: "100"
                        }),
                        e(Field, {
                            label: "Maximum Expected Pay",
                            name: "max-pay",
                            type: "number",
                            min: "0",
                            step: "100"
                        })
                    ),
                    e(
                        "label",
                        { className: "field" },
                        e("span", { className: "field-label" }, "Skills"),
                        e("input", {
                            className: "field-input",
                            name: "skills",
                            placeholder: "Customer service, QA, communication",
                            required: true
                        })
                    ),
                    e(
                        "label",
                        { className: "field" },
                        e("span", { className: "field-label" }, "Experience"),
                        e("textarea", {
                            className: "field-input field-textarea",
                            name: "experience",
                            required: true,
                            placeholder: "Briefly summarize your relevant experience..."
                        })
                    ),
                    e(
                        "label",
                        { className: "field" },
                        e("span", { className: "field-label" }, "About You"),
                        e("textarea", {
                            className: "field-input field-textarea",
                            name: "about",
                            required: true,
                            placeholder: "Tell us about yourself and why you are interested in this role."
                        })
                    )
                ),
                e(
                    "div",
                    { className: "form-actions" },
                    e(
                        "button",
                        { className: "submit-btn", type: "submit" },
                        "Submit Application"
                    )
                )
            )
        );
    }

    ReactDOM.createRoot(document.getElementById("app")).render(e(ApplicationPage));
})();
