import './Report.css'
export default function Report() {
    return (
        <div className='report-container'>
            <img className='report-bg' src={process.env.PUBLIC_URL + '/Report.png'} alt="Report BG" />
            <div className='report-content'>
                <div className='first-container'>
                    <div className='report-header'>ANNUAL REPORT</div>
                    <div className='report-main'>
                        This is our first issue of Annual Report of E- Cell. </div>
                    <button>Read</button>
                </div>
                <div className='second-container'>
                    <img className='rpt' src={process.env.PUBLIC_URL + '/report1.png'} alt="Report BG" />
                </div>
            </div>
        </div>)
}
