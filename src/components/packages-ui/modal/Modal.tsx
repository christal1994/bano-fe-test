import type { FC } from 'react';
import type { ModalProps } from './types';
import s from './index.module.less';

const Modal: FC<ModalProps> = (props) => {
  const { visible, onClose, title, children } = props;

  const handleClose = (e: React.SyntheticEvent) => {
    onClose?.(e);
  };

  return visible ? (
    <>
      <div className={s.mask}></div>
      <div className={s.modal}>
        <div className={s.title}>
          <span className={s.text}>{title}</span>

          <div className={s.close} onClick={handleClose}>
            <svg aria-hidden="true">
              <use href="#icon-close" fill="#999" />
            </svg>
          </div>
        </div>

        <div className={s.body}>{children}</div>
      </div>
    </>
  ) : null;
};

export default Modal;
