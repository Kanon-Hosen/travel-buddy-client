import React from 'react';

const Contact = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center font-bold text-black text-5xl'>Contact me</h1>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-900 mt-8">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Name" className="w-full p-3 rounded border-2 " />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded border-2" placeholder='Email' />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded border-2" placeholder='Message'> </textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-500 text-gray-50">Send Message</button>
	</form>
</div>
</div>
    );
};

export default Contact;