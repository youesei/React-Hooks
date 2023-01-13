import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

	const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
	
	return (
	<>
		<h1>BreakingBad Quotes</h1>

		<hr />

		{
			isLoading
			? <LoadingQuote />
			: <Quote data={data}/>
		}

		<button
			className="btn btn-primary"
			onClick={ () => increment() }
			disabled={isLoading}
		>
			Next quote
		</button>
	</>
)
}
