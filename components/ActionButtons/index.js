import Link from 'next/link';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const ActionButtons = ({ id, redirect }) => {
  const router = useRouter();
  const handleDelete = async () => {
    fetch(`/api/resources/`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    if (redirect) {
      router.push('/');
    }
  };

  return (
    <div className={styles.action_buttons}>
      <Link href='/resources/[id]/edit' as={`/resources/${id}/edit`}>
        <a className={styles.edit}>✏️</a>
      </Link>
      <button className={styles.delete} onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
};

export default ActionButtons;
