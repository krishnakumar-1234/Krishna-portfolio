import React from 'react'
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
export default function page() {
    return (
        <section className="text-gray-400 bg-black-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-800">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="html5" class="svg-inline--fa fa-html5 htmlIcons " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-white title-font mb-2 leading-10">HTML (HyperText Markup Language) is the foundation of web development.</h2>
                            <p className="leading-8">It's used to create the structure and content of web pages by defining various elements such as headings, paragraphs, lists, links, and more. HTML documents are rendered by web browsers to display text, images, and multimedia content.</p>
                        </div>
                    </div>
                    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3-alt" class="svg-inline--fa fa-css3-alt htmlIcons cssicons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-white title-font mb-2 leading-10">CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML documents. It</h2>
                            <p className="leading-8"> It allows web developers to style the appearance of web pages by specifying colors, fonts, spacing, and other visual attributes. CSS enables the separation of content from presentation, making it easier to maintain and update website designs.</p>
                        </div>
                    </div>
                    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="square-js" class="svg-inline--fa fa-square-js htmlIcons jsicons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1V381.4c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6c-39.1 0-64.4-18.6-76.7-43z"></path></svg>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-white title-font mb-2 leading-10">JavaScript is a programming language that adds interactivity and dynamic behavior to web pages. </h2>
                            <p className="leading-8">It's commonly used to create interactive features such as form validation, animations, and responsive design. JavaScript can interact with HTML and CSS to manipulate the content and appearance of web pages in real time, providing a richer and more engaging user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
