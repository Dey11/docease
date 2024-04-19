SETUP:
Frontend:
cd frontend
npm run dev

Backend:
cd backend
tsc -b
node dist/index.js

INTRODUCTION:
DocEase is a web application which solves the need to go to third party websites now and then
to edit files and images as and when required during online form fillups. Most of the times
these third party websites are not safe and there are no ways to save the documents in the
website itself to retrieve them later when required again. That is where our solution, DocEase
comes in. DocEase not only stores documents safely, available to be retrieved anytime, but also
offers document editing tools right out of the box. So you do not have to go to another shady 
website to get the size of your signature reduced to under 100kb.

DocEase uses Cloudinary to store documents and edit them as per use. This ensures that they're
both stored safely and provides tools that are easy to use. With an user-friendly interface, 
this is the only document storing website you'll ever need again. We also provide teams access
to collaborate and save documents together.

Future scope:
We will look to reduce the load on our primary backend by implementing message queues and worker
functions which will do the time consuming jobs like uploading and editing files. This will
ensure that our users get a smooth and interactive environment.
