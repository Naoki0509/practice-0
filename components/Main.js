import styles from "./Main.module.css";
import { HeadLine } from "./HeadLine";
import { Links } from "./Links";

export function Main(props) {
	return (
		<main className={styles.main}>
			<HeadLine page={props.page}>
				<code className={styles.code}>pages/{props.page}.js</code>
			</HeadLine>
			<Links />
		</main>
	);
}
