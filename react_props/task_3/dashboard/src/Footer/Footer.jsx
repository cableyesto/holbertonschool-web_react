import { getCurrentYear, getFooterCopy } from '../utils/utils.js'
import './Footer.css'

function Footer({ isIndex }) {
  return (
    <>
      <div className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </>
  )
};

export default Footer