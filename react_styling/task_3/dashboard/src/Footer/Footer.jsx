import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer({ isIndex }) {
  return (
    <>
      <div className='App-footer flex justify-center border-t-3 border-[var(--main-color)]'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </>
  )
};

export default Footer