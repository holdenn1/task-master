import classNames from 'classnames';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setIsAddTaskForm, setShowMembers } from '@/store/slices/mainSlice';

type TaskNavigationProps = {
  deleteProject: () => Promise<void>;
  isMenu: boolean;
};

function TaskNavigation({ deleteProject, isMenu }: TaskNavigationProps) {
  const { isAddTaskForm, isShowMembers } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  return (
    <div
      className={classNames(styles.projectMenu, {
        [styles.projectMenuActive]: isMenu,
      })}
    >
      <ul className={styles.projectMenuList}>
        <li onClick={() => dispatch(setShowMembers(!isShowMembers))} className={styles.projectMenuItem}>
         {!isShowMembers ? 'Show members' : 'Return to tasks'}
        </li>
        <li onClick={() => dispatch(setIsAddTaskForm(!isAddTaskForm))} className={styles.projectMenuItem}>
          {isAddTaskForm ? 'Task list' : 'Add task'}
        </li>
        <li
          onClick={() => deleteProject()}
          className={classNames(styles.projectMenuItem, styles.removeMenuItem)}
        >
          Remove project
        </li>
      </ul>
    </div>
  );
}

export default TaskNavigation;
