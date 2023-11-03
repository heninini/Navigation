import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      {" "}
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum nulla eu ligula pellentesque, vitae interdum tellus rhoncus.
        Quisque vitae iaculis sapien, eu ornare mauris. Aenean augue turpis,
        tincidunt vel lorem eu, faucibus volutpat leo. Maecenas venenatis ligula
        sed tortor lacinia, varius facilisis risus facilisis. Suspendisse justo
        risus, ultrices nec congue eget, feugiat dapibus dui. Donec enim massa,
        molestie nec elementum et, consequat eget libero. Curabitur eu nulla
        ante. Vestibulum sit amet ornare purus, eget pharetra nibh. Cras et nibh
        sem. Suspendisse at semper tortor. Nunc suscipit, ex at venenatis
        porttitor, est erat accumsan lorem, sed aliquam turpis mi quis mauris.
        Fusce dolor neque, bibendum a faucibus non, blandit non velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum nulla eu ligula pellentesque, vitae interdum tellus rhoncus.
        Quisque vitae iaculis sapien, eu ornare mauris. Aenean augue turpis,
        tincidunt vel lorem eu, faucibus volutpat leo. Maecenas venenatis ligula
        sed tortor lacinia, varius facilisis risus facilisis. Suspendisse justo
        risus, ultrices nec congue eget, feugiat dapibus dui. Donec enim massa,
        molestie nec elementum et, consequat eget libero. Curabitur eu nulla
        ante. Vestibulum sit amet ornare purus, eget pharetra nibh. Cras et nibh
        sem. Suspendisse at semper tortor. Nunc suscipit, ex at venenatis
        porttitor, est erat accumsan lorem, sed aliquam turpis mi quis mauris.
        Fusce dolor neque, bibendum a faucibus non, blandit non velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum nulla eu ligula pellentesque, vitae interdum tellus rhoncus.
        Quisque vitae iaculis sapien, eu ornare mauris. Aenean augue turpis,
        tincidunt vel lorem eu, faucibus volutpat leo. Maecenas venenatis ligula
        sed tortor lacinia, varius facilisis risus facilisis. Suspendisse justo
        risus, ultrices nec congue eget, feugiat dapibus dui. Donec enim massa,
        molestie nec elementum et, consequat eget libero. Curabitur eu nulla
        ante. Vestibulum sit amet ornare purus, eget pharetra nibh. Cras et nibh
        sem. Suspendisse at semper tortor. Nunc suscipit, ex at venenatis
        porttitor, est erat accumsan lorem, sed aliquam turpis mi quis mauris.
        Fusce dolor neque, bibendum a faucibus non, blandit non velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum nulla eu ligula pellentesque, vitae interdum tellus rhoncus.
        Quisque vitae iaculis sapien, eu ornare mauris. Aenean augue turpis,
        tincidunt vel lorem eu, faucibus volutpat leo. Maecenas venenatis ligula
        sed tortor lacinia, varius facilisis risus facilisis. Suspendisse justo
        risus, ultrices nec congue eget, feugiat dapibus dui. Donec enim massa,
        molestie nec elementum et, consequat eget libero. Curabitur eu nulla
        ante. Vestibulum sit amet ornare purus, eget pharetra nibh. Cras et nibh
        sem. Suspendisse at semper tortor. Nunc suscipit, ex at venenatis
        porttitor, est erat accumsan lorem, sed aliquam turpis mi quis mauris.
        Fusce dolor neque, bibendum a faucibus non, blandit non velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum nulla eu ligula pellentesque, vitae interdum tellus rhoncus.
        Quisque vitae iaculis sapien, eu ornare mauris. Aenean augue turpis,
        tincidunt vel lorem eu, faucibus volutpat leo. Maecenas venenatis ligula
        sed tortor lacinia, varius facilisis risus facilisis. Suspendisse justo
        risus, ultrices nec congue eget, feugiat dapibus dui. Donec enim massa,
        molestie nec elementum et, consequat eget libero. Curabitur eu nulla
        ante. Vestibulum sit amet ornare purus, eget pharetra nibh. Cras et nibh
        sem. Suspendisse at semper tortor. Nunc suscipit, ex at venenatis
        porttitor, est erat accumsan lorem, sed aliquam turpis mi quis mauris.
        Fusce dolor neque, bibendum a faucibus non, blandit non velit.
      </p>
    </div>
  );
}
export default ModalPage;
