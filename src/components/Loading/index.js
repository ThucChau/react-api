import React from 'react';
import {StyleLoadingContainer, StyleSVG} from './Loading.styled';

function Loading({ isLoading }) {
    return (
        <StyleLoadingContainer isLoading={isLoading}>
            <StyleSVG xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(80,50)">
                    <g transform="rotate(0)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity={1} transform="scale(1.23732 1.23732)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s" />
                        </circle>
                    </g>
                </g><g transform="translate(71.21320343559643,71.21320343559643)">
                    <g transform="rotate(45)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.875" transform="scale(1.29982 1.29982)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s" />
                        </circle>
                    </g>
                </g><g transform="translate(50,80)">
                    <g transform="rotate(90)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.75" transform="scale(1.36232 1.36232)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s" />
                        </circle>
                    </g>
                </g><g transform="translate(28.786796564403577,71.21320343559643)">
                    <g transform="rotate(135)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.625" transform="scale(1.42482 1.42482)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s" />
                        </circle>
                    </g>
                </g><g transform="translate(20,50.00000000000001)">
                    <g transform="rotate(180)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.5" transform="scale(1.48732 1.48732)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s" />
                        </circle>
                    </g>
                </g><g transform="translate(28.78679656440357,28.786796564403577)">
                    <g transform="rotate(225)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.375" transform="scale(1.04982 1.04982)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s" />
                        </circle>
                    </g>
                </g><g transform="translate(49.99999999999999,20)">
                    <g transform="rotate(270)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.25" transform="scale(1.11232 1.11232)">
                            <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s" />
                        </circle>
                    </g>
                </g><g transform="translate(71.21320343559643,28.78679656440357)">
                    <g transform="rotate(315)">
                        <circle cx={0} cy={0} r={6} fill="#ff727d" fillOpacity="0.125" transform="scale(1.17482 1.17482)">
                            <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite" />
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s" />
                        </circle>
                    </g>
                </g>
            </StyleSVG>
        </StyleLoadingContainer>
    );
}

export default Loading;