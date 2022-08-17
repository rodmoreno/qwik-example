import { component$ } from '@builder.io/qwik';
import { Content } from '@builder.io/qwik-city';

export const Body = component$(() => {
    return (
        <body>
            <Content />
        </body>
    );
});
