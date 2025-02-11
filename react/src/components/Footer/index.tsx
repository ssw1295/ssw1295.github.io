import './index.scss'

const COMPONENT_NAME = 'footer'

export default ({
}: {
}) => {
  return <>
    <div className={COMPONENT_NAME}>
      <div>
        this page powered by github page
        <br />
        with Jekyll, React
        <br />
      </div>
    </div>
  </>
}