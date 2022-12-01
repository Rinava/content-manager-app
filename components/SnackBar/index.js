import styles from './styles.module.scss';

const SnackBar = ({ message, type, show, onClose }) => {
  return (
    <>
      {show && (
        <div className={styles.snackbar}>
          <p className={styles.message}>{message}</p>
          <button className={styles.close} onClick={onClose}>
            X
          </button>
        </div>
      )}
    </>
  );
};
export default SnackBar;
