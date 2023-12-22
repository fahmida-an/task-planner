const Banner = () => {
    return (
        <div>
            <section >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl font-bold leadi sm:text-5xl">
            Welcome to the Task Planner
       

			</h1>
			<p className="mt-6 mb-8 text-2xl sm:mb-12">
            Organize your tasks efficiently with our powerful task planning tool.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border border-black ">Get Started</a>

			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={'https://i.ibb.co/2ZzVKfD/plan2.png'} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
			{/* <img src={'https://i.ibb.co/hDV92FX/planning.png'} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;