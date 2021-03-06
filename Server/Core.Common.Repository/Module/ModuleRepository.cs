﻿using Core.Common.Contracts.Constants;
using Core.Common.Contracts.Module;
using Core.Common.Contracts.Module.DomainObjects;
using Dapper;
using Framework.Base.BL.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Repository.Module
{
    public class ModuleRepository : BaseRepository, IModuleRepository
    {
        public ModuleRepository() : base(QueryProviders.Module)
        {
        }

        public List<Menu> GetMenu(string ModuleId)
        {
            List<Menu> menues = null;
            string sql = GetQuery("ModuleMenu");
            using (Connection)
            {
                menues = Connection.Query<Menu>(sql, new { ModuleId }).AsList();
            }
            return menues;
        }

        public override object GetPocoObject<T>(T Model)
        {
            throw new NotImplementedException();
        }
    }
}
