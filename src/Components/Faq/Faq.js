import React from 'react';

const Faq = () => {
    return (
        <section>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How We Work</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Can I buy a course and use it later?</h3>
                        <p className="mt-1 text-gray-400">Yes. You will continue to have access to the course after you complete it, provided that your account's in good standing, and Learn With Anik360 continues to have a license to the course. So, if you wish to review specific content in the course after you finish it, or take it all over again, you can.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Is all the courses are one time payment?</h3>
                        <p className="mt-1 text-gray-400">You pay a one-time fee for any course and, unlike Pluralsight or Lynda LinkedIn Learning that charge a monthly subscription, your Anik360 course will be yours forever. Most video courses on Udemy are priced between $120 and $400 but before you key in the credit card, ready this</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Can I put this certification on my resume?</h3>
                        <p className="mt-1 text-gray-400"> YES! Everything relevant that you have 'actually done', deserves a mention in the Resume.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Do all Anik360 courses have lifetime access?</h3>
                        <p className="mt-1 text-gray-400">Yes.Students receive lifetime access to a Anik360 course regardless of what price they paid for it, or whether they used a coupon to enrol or not.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;