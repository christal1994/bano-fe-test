import type { FC, SyntheticEvent } from 'react';
import { useCallback } from 'react';
import { IconModalClose } from '@component/packages-ui/icon';
import type { ModalProps } from './types';
import s from './index.module.less';

const Modal: FC<ModalProps> = (props) => {
  const { visible, onClose, title, children } = props;

  const handleClose = useCallback((e: SyntheticEvent) => {
    onClose?.(e);
  }, []);

  return visible ? (
    <>
      <div className={s.mask}></div>
      <div className={s.modal}>
        <div className={s.title}>
          <span className={s.text}>{title}</span>

          <IconModalClose onClick={handleClose} />
        </div>

        <div className={s.body}>{children}</div>
      </div>
    </>
  ) : null;
};

export default Modal;
