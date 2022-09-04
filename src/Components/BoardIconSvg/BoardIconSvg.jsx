export default function BoardIconSvg({color}) {

	return (
		<div style={{
			width: "8vw",
			aspectRatio: "1/1",
			margin: "1rem auto"
		}}>
			<svg style={{width: "100%", height: "100%"}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path fill={color} d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h13A5.506,5.506,0,0,0,24,18.5V5.5A5.506,5.506,0,0,0,18.5,0ZM3,18.5V12h9V3h6.5A2.5,2.5,0,0,1,21,5.5V12H12v9H5.5A2.5,2.5,0,0,1,3,18.5Z"/></svg>
		</div>
	)
}