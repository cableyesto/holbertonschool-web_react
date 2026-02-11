function BodySection({ title, children }) {
  return (
    <>
      <div className='bodySection'>
        <h2 className='font-bold'>{title}</h2>
        {children}
      </div>
    </>
  )
};

export default BodySection
