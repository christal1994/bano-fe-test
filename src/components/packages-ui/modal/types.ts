/**
 * @params  visible   是否显示 Modal
 * @params  onClose   点击遮罩层或右上角叉或取消按钮的回调
 * @params  title     标题
 */
export interface ModalProps {
  visible: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  onClose?: (e: React.SyntheticEvent) => any;
}
