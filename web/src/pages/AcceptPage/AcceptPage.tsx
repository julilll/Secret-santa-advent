import { Form } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import Upload from 'src/components/Upload/Upload'

const AcceptPage = () => {
  return (
    <>
      <Metadata title="Accept" description="Accept page" />

      <h3 className="m-0 p-0 text-center font-handwriting text-3xl uppercase leading-none text-white">
        Awesome!
      </h3>
      <HeaderWithRulers className="text-white" heading="Sign up" />
      <Form className="mx-auto w-full max-w-[660px]">
        <div className="field">
          <ShowHidePassword label="Password" name="Password" />
        </div>
        <div className="field">
          <Upload />
        </div>
        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  )
}

export default AcceptPage
