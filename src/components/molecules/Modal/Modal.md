Modal is a flexible dialog prompt.

It is just a simple wrapper around [`react-modal`](http://reactcommunity.org/react-modal/) with some default styling.

All the props are being passed down to `react-modal` so if you want to customize it, please refer to its documentation.

**Notes ⚠️**:

- In order to use it, you have to call `Modal.setAppElement('#rootElementId')` in the root component. You'll also need to include `<Modal.Styles>` component (preferably in the top level component) that contains the global styles from the modal.

- Note that in order to make `<Modal />` to close when the user clicks on the overlay, you'll need to do so in a handler supplied to the `onRequestClose` prop. See [`react-modal` documentation](http://reactcommunity.org/react-modal/examples/on_request_close.html) for more background about this.

```jsx
import Button from 'zopa-react-components/components/atoms/Button/Button';

// set it to the root element
Modal.setAppElement('#rsg-root');

// root component
class App extends React.Component {
  render() {
    return (
      <div>
        <Modal.Styles />
        <ModalDemo />
      </div>
    );
  }
}

const ModalDemo = () => {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update(prevState => !prevState);
  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <h2>Title of the modal</h2>
        <p>text of the modal</p>
        <Button onClick={toggleModal} styling="link">
          Close Modal
        </Button>
      </Modal>
    </>
  );
};

<App />;
```
