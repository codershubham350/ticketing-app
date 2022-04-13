import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: 'Concert',
      price: 20,
    });
  } catch (err) {
    console.error(err);
  }
  // In NATS we can only use sting data, so need to covert to JSON.stringify()
  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'Concert',
  //   price: 20,
  // });

  // stan.publish('ticket:created', data, () => {
  //   console.log('Event Published');
  // });
});
