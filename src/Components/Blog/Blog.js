import React from 'react';

const Blog = () => {
    return (
        <section>
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-center font-bold sm:text-4xl my-10">Our Blog</h2>
                <div className="space-y-4 w-4/5 mx-auto">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is cors?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            <br />
                            I can use other options like:
                            <br />
                            <ul className="list-disc ml-4">
                                <li>Auth0</li>
                                <li>Okta</li>
                            </ul>
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does the private route work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            Private Routes in React Router (also called Protected Routes) are routes that are only accessible to authenticated users. When a user is not authenticated, they are redirected to a login page. Private routes are useful for protecting pages that require a user to be logged in to view. For example, a user profile page or an admin dashboard. <br />
                            Private route is a component that takes a component as a prop and returns a component. If the user is logged in, it will return the component that is passed as a prop. If the user is not logged in, it will redirect the user to the login page.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. <br />
                            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                            Node.js basically works on two concept:
                            <ol className="list-disc ml-4">
                                <li>Asynchronous</li>
                                <li>Non-blocking I/O</li>
                            </ol>
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;