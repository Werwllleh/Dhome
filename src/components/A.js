import Link from "next/link";


export default function A({ href, text }) {
	return (
		<Link href={href}>
			{text}
		</Link>
	)
};
