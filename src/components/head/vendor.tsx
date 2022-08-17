import { partytownSnippet } from '@builder.io/partytown/integration';

export const Vendor = () => {
    return (
        <>
            {/*  Analytics  */}
            <script
                dangerouslySetInnerHTML={partytownSnippet({
                    forward: ['dataLayer.push'],
                })}
            />
            <script
                type="text/partytown"
                dangerouslySetInnerHTML={`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W776K5Z');`}
            />

            {/*  DNS Prefetch  */}
            {/* <link rel="dns-prefetch" href="https://cdn.jsdelivr.net/" /> */}
            {/* <link rel="dns-prefetch" href="https://cdn.builder.io/" /> */}
        </>
    );
};
