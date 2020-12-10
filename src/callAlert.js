let count = 0;
export default function (message) {
  if (count === 0) {
    console.log('>> Домашнее задание урока 2 (Вместо alert :] )');
    count += 1;
  }
  console.log('>>', message);
}
