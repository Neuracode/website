// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', process.env.GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params);
};

export function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof url != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        send_to: `${process.env.GOOGLE_ADS}/0iKlCIuqp8EDENmf0NYo`,
        event_callback: callback,
    });
    return false;
}
