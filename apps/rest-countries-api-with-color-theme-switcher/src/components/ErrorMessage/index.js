import { Message } from 'semantic-ui-react'

function ErrorMessage() {
  return (
    <Message
      className="ErrorMessage"
      color="red"
      icon="exclamation"
      header="An error occurred"
      content="Please, refresh the page or try again later"
    />
  )
}

export default ErrorMessage
