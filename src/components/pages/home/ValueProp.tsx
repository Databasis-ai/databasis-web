const ValueProp = () => {
	return <section className="py-10 bg-gray-800 overflow-hidden">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap -m-4">
				<div className="w-full md:w-1/3 p-4">
				</div>
				<div className="w-full  md:w-1/3 p-4">
					<div className="flex flex-col justify-end p-10  bg-gray-900 h-full rounded-3xl">
						<h2 className="font-heading text-6xl text-gray-100 font-bold tracking-tight center-text">
							Instant and Worry-free <br />
							<span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-600">
								&nbsp;Data Infrastructure&nbsp;
							</span>
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/3 p-4">
				</div>
			</div>
		</div>
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap -m-4">
				<div className="w-full p-4">
					<div className="flex flex-col justify-end p-10  bg-gray-900 h-full rounded-3xl">
						<h2 className="font-heading text-3xl text-gray-100 font-bold tracking-tight center-text">
							<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-600">
								&nbsp;4db is the infrastructure that drives next-gen data science, analytics, and warehousing&nbsp;
							</span>
							{/* <span>More than </span>
							<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
								100
							</span>
							<span> databases currently	connected
							</span> */}
						</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default ValueProp;