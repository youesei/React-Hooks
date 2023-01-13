import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

	const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
	
	console.log(data);

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
