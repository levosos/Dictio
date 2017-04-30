import { UtilsService } from '../services/utils.service';

export class Challenge
{
  description: string;
  english: string;
  spanish: string;
}

export interface IChallenger
{
  challenge(): Promise<Challenge | undefined>;  
}

export abstract class Challenger<T> implements IChallenger
{
  private members: T[];

  constructor(private utils: UtilsService) {
  }
  
  async challenge(): Promise<Challenge | undefined>
  {
    if (this.members === undefined) {
      this.members = await this.init();
      this.utils.shuffle(this.members);
    }

    const member: T = this.members.pop();
    
    if (member === undefined) {
      return undefined;
    }

    return this.convert(member);
  }

  abstract init(): Promise<T[]>;
  abstract convert(member: T): Challenge;
}