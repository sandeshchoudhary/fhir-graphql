import { QueryResolvers } from './types';

const resolvers: QueryResolvers = {
  async patients(_parent, {next=""}, {getPatients, getNextPatients}) {
    var result;
    if(next=="") {
      result = await getPatients();
    }
    else{
      result = await getNextPatients(next);
    }
    result.hasMore = false;
    for (var i =0, l=result.link.length; i<l;i++){
      var obj = result.link[i];
      if(obj.relation=="next" && obj.url){
        result.hasMore = true;
        break;
      }
    }
    return result;
  },

  async patient(_parent, {id}, {getPatient}) {
    const result = await getPatient(id);
    return result;
  }
}

export default resolvers 