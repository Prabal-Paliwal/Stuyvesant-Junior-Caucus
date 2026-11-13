import { JPROM_INFO_DOC_URL, JPROM_RESULTS_DATE } from "./jpromConfig";

// Homepage banner showing the current JProm committee status.
// Remove <JpromBanner /> from App.tsx (or return null here) to hide it.
function JpromBanner() {
    return <div className="jprom-banner">
        <span className="jprom-banner-text">
            JProm Committee applications are now closed. First-round results release {JPROM_RESULTS_DATE}.
        </span>
        <div className="jprom-banner-actions">
            <a className="jprom-banner-btn" target="_blank" href={JPROM_INFO_DOC_URL}>Info Doc</a>
        </div>
    </div>;
}

export default JpromBanner
